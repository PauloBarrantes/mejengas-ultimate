import React from "react";
import { cn } from "~/utils/utils";

import TextInput from "../Forms/TextInput";
import RangeInput from "../Forms/Range";
import useDashboard from "~/app/store/useDashboard";
import { api } from "~/trpc/react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BadgeWrapper from "./BadgeWrapper";
interface NewPlayerProps {
  open: boolean;
}

const schema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  playerStats: z
    .object({
      physicalCondition: z
        .number()
        .or(z.string().regex(/\d+/).transform(Number)),
      passes: z.number().or(z.string().regex(/\d+/).transform(Number)),
      power: z.number().or(z.string().regex(/\d+/).transform(Number)),
      dribbling: z.number().or(z.string().regex(/\d+/).transform(Number)),
      speed: z.number().or(z.string().regex(/\d+/).transform(Number)),
    })
    .strict(),
});

const NewPlayer = ({ open }: NewPlayerProps) => {
  const { setMinimize } = useDashboard((state) => state);
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const createPlayer = api.player.create.useMutation({
    onSuccess: () => {
      GoBack();
    },
  });

  const GoBack = () => {
    methods.reset();
    setMinimize();
  };

  const submitData = (data: any) => {
    createPlayer.mutate({ name: data.name, playerStats: data.playerStats });
  };
  return (
    <React.Fragment>
      <div>
        <h1
          className={cn(
            "font-display text-2xl font-bold leading-relaxed tracking-wide",
            open ? "block" : "hidden",
          )}
        >
          New Player
        </h1>
        <div className={cn("mt-5 flex-row", open ? "flex" : "hidden")}>
          <FormProvider {...methods}>
            <BadgeWrapper />

            <form
              className="grid flex-grow grid-cols-2 gap-5 px-5 md:mx-5"
              onSubmit={methods.handleSubmit(submitData)}
            >
              <TextInput
                name="name"
                label="Full Name"
                placeholder="Julio Nuñez"
                required
              />
              {/* <ImageInput /> @todo image input */}
              <RangeInput
                name="playerStats.physicalCondition"
                label="Physical condition"
              />
              <RangeInput name="playerStats.passes" label="Passes" />
              <RangeInput name="playerStats.power" label="Power" />
              <RangeInput name="playerStats.dribbling" label="Dribbling" />
              <RangeInput name="playerStats.speed" label="Speed" />
              <div className="col-span-2 mt-5 flex justify-end align-bottom">
                <button
                  type="button"
                  className=" mx-2 border-2 border-ternary bg-neutral-100 px-5 py-2 tracking-wide shadow-secondary transition-shadow hover:shadow-secondary-hover "
                  onClick={GoBack}
                >
                  Back
                </button>
                <button
                  disabled={createPlayer.isLoading}
                  type="submit"
                  className="mx-2 border-2 border-ternary bg-neutral-100 px-5 py-2 tracking-wide shadow-primary transition-shadow hover:shadow-primary-hover"
                >
                  Add Player
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPlayer;
