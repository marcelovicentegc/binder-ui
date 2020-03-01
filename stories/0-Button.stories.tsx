import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Button,
  ButtonType,
  ButtonSize,
  ArrowIcon,
  BackArrowIcon,
  NewIcon,
  EditBinderIcon,
  Separator,
  BinderIcon
} from "../src";
import { Mode } from "../src/utils/generics";

const stories = storiesOf("Button", module);

stories.add("default", () => <Button label="Default is primary" />, {
  info: { inline: true }
});

stories.add(
  "primary",
  () => (
    <Button
      label="Sign in"
      buttonType={ButtonType.primary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "primary and dark mode",
  () => (
    <Button
      label="Sign in"
      buttonType={ButtonType.primary}
      mode={Mode.dark}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "secondary",
  () => (
    <Button
      label="Skip introduction"
      buttonType={ButtonType.secondary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "secondary and dark mode",
  () => (
    <Button
      label="Skip introduction"
      buttonType={ButtonType.secondary}
      mode={Mode.dark}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "secondary and small",
  () => (
    <Button
      label="Skip introduction"
      buttonType={ButtonType.secondary}
      buttonSize={ButtonSize.small}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "tertiary",
  () => (
    <Button
      label="Cancel"
      buttonType={ButtonType.tertiary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "quaternary",
  () => (
    <Button
      label="Register here"
      buttonType={ButtonType.quaternary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "round",
  () => (
    <Button
      label=""
      buttonType={ButtonType.round}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "round with icon",
  () => (
    <Button
      label=""
      buttonType={ButtonType.round}
      icon={<ArrowIcon />}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "primary with icon",
  () => (
    <Button
      label="Back"
      icon={<BackArrowIcon />}
      buttonType={ButtonType.primary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "secondary with secondary icon",
  () => (
    <Button
      label="Edit"
      secondaryIcon={<EditBinderIcon />}
      buttonType={ButtonType.secondary}
      onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "custom",
  () => {
    const [backgroundColor, setBackgroundColor] = React.useState("#015649");

    return (
      <>
        <Button
          label="New binder"
          buttonType={ButtonType.tertiary}
          icon={<NewIcon color={"white"} />}
          onMouseEnter={() => setBackgroundColor("#027462")}
          onMouseLeave={() => setBackgroundColor("#015649")}
          style={{
            backgroundColor
          }}
          labelProps={{
            style: {
              color: "#F5F5F5"
            }
          }}
          onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
        />
        <Separator invisible />
        <Button
          label="Login with Binder"
          buttonType={ButtonType.secondary}
          icon={<BinderIcon />}
          style={{
            width: "360px"
          }}
          onClick={() => alert("🚀🚀🚀🚀🚀🚀🚀")}
        />
      </>
    );
  },
  {
    info: { inline: true }
  }
);
