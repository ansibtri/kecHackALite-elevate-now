import Cards from '@/components/Card/Cards'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { createLazyFileRoute } from '@tanstack/react-router'
import { localBusinessOwners } from '@/lib/Databases/lbo'
import { user } from '@/lib/Databases/user'
import { useAuth } from '@/lib/Auth'

export const Route = createLazyFileRoute('/_user/fb')({
  component: RouteComponent,
})

function RouteComponent() {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const { getUser } = useAuth()
  const boxStyle = {
    width: '100%',
    border: '1px solid #f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
  }
  return (
    <Box>
      <Box sx={boxStyle}>
        <Stack
          direction="rows"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">Feedback</Typography>
        </Stack>
      </Box>
      <Box sx={boxStyle}>
        {localBusinessOwners.map((lbo) => (
          <Cards
            key={lbo.userId}
            title={lbo.title}
            type={capitalize(lbo.userField)}
            price={'Asked On: ' + lbo.date}
            description={lbo.excerpt}
            buttonText="Contact Now"
          />
        ))}
      </Box>
    </Box>
  )
}
