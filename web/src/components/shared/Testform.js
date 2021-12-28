import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styled from "styled-components";

const schema = z.object({
  name: z.string().nonempty({ message: "required" }),
  email: z.string().email({
    message: "wrong",
  }),
});

const Form = styled.form``;

const Input = styled.input``;

const Para = styled.p``;

const Testform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <Form onSubmit={handleSubmit((d) => console.log(d))}>
      <Input {...register("name")} />
      {errors.name?.message && <Para> {errors.name?.message} </Para>}

      <Input {...register("email")} />
      {errors.email?.message && <Para> {errors.email?.message} </Para>}

      <Input type="submit" value="submit" />
    </Form>
  );
};

export default Testform;
