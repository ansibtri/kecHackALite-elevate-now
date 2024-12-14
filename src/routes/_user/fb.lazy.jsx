import Cards from "@/components/Card/Cards";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { localBusinessOwners } from "@/lib/Databases/lbo";
import { user } from "@/lib/Databases/user";
import { useAuth } from "@/lib/Auth";
import { feedback } from "@/lib/Databases/feedback";

export const Route = createLazyFileRoute("/_user/fb")({
  component: RouteComponent,
});

function RouteComponent() {
  const { getUser } = useAuth();
  const userId = getUser()[0]["id"];
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const boxStyle = {
    width: "100%",
    border: "1px solid #f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  };
  return (
    <Box>
      <Box sx={boxStyle}>
        <Stack
          direction="rows"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Feedback</Typography>
        </Stack>
      </Box>
      <Box sx={boxStyle}>
          <Cards
            
            title="Bookworms Corner"
            type="Small Scale"
            price={"Posted On: 12/12/2021"}
            description="Paper quality was not good."
          />
      </Box>
    </Box>
  );
}
