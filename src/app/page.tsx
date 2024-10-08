import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useFormState } from "react-dom";

export default function Home() {
  return (
    <FormControl className="centerForm">
      <FormLabel id="demo-radio-buttons-group-label">New Book</FormLabel>

      <TextField
        id="title"
        label="Title"
        variant="standard"
        margin="normal"
        required
        fullWidth
      />

      <TextField
        id="author"
        label="Author"
        variant="standard"
        margin="normal"
        fullWidth
      />

      <TextField
        id="isbn"
        label="ISBN"
        variant="standard"
        margin="normal"
        required
        fullWidth
      />

      <TextField
        id="coverURL"
        label="CoverURL"
        variant="standard"
        margin="normal"
        fullWidth
      />

      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="owned"
        name="radio-buttons-group"
        id="status"
      >
        <FormControlLabel value="owened" control={<Radio />} label="Owned" />
        <FormControlLabel value="wanted" control={<Radio />} label="Wanted" />
      </RadioGroup>
      <Button type="submit">Submit</Button>
    </FormControl>
  );
}
