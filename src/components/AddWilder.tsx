/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { WilderProps } from './Wilder';

const PhandleSubmit = async (data: Pick<WilderProps, 'city' | 'name'>) => {
  try {
    const result = await axios.post(
      'http://localhost:5000/api/v2/wilders/create',
      data
    );

    console.warn('ok ? : ', result);
  } catch (err) {
    console.error(err);
  }
};

const AddWilder = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  console.error(errors);
  // console.log(watch, 'name');
  return (
    <form onSubmit={handleSubmit(PhandleSubmit)}>
      <label>Name:</label>
      <br />
      <input {...register('name', { required: true })} /> <br />
      {errors.name && <span>{errors.name.type}</span>}
      <label>City:</label>
      <br />
      <input {...register('city')} />
      <br />
      <input type="submit" />
      <br />
    </form>
  );
};

export default AddWilder;
