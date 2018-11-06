import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface FormValues {
  name: string;
  price: number;
}

export const CreateAuctionForm = () => {
  return (
    <Formik<FormValues>
      initialValues={{
        name: "",
        price: 0
      }}
      onSubmit={({ name, price }) => {
        // call mutation
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="price"
            label="Price"
            value={values.price}
            onChange={handleChange}
            margin="normal"
          />
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
