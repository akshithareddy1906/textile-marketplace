import {
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function FilterSidebar() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" mb={2}>
        Filters
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Cotton"
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Silk"
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Denim"
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Linen"
        />
      </FormGroup>
    </Paper>
  );
}

export default FilterSidebar;