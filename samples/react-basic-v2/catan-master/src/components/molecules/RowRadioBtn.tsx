/* eslint-disable */
import * as React from 'react';

import {
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material';

type RadioItem = {
    label: string;
    value: number;
};

type RowRadioBtnGroupProps = {
    items: RadioItem[];
    selIndex: number;
    setSelIndex: (index: number) => void;
};

export type { RadioItem, RowRadioBtnGroupProps };

const RowRadioBtnGroup: React.FC<RowRadioBtnGroupProps> = (props: RowRadioBtnGroupProps) => {

    const { items: radioItems } = props;
    const { selIndex, setSelIndex } = props;

    const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
        if (checked) {
            setSelIndex(Number((event.target as HTMLInputElement).value));
        }
    };

    const formCtlLabels =
      radioItems.length > 0 &&
      radioItems.map((radioItem) => (
        <FormControlLabel
          value={radioItem.value}
          control={<Radio />}
          label={radioItem.label}
          onChange={handleChange}
          checked={selIndex === radioItem.value}
        />
      ));

    return (
      <Box
        sx={{
            width: '50%',
            height: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: '0.4rem',
            margin: '3px auto',
            padding: '1rem',
        }}
      >
        <FormControl>
          <FormLabel id="row-radio-btn-grp-label">Num of Players</FormLabel>
          <RadioGroup
            row
            aria-aria-labelledby="row-radio-btn-grp-label"
            name="row-radio-btn-grp"
          >
            {formCtlLabels}
          </RadioGroup>
        </FormControl>
      </Box>
    );
};

export default RowRadioBtnGroup;