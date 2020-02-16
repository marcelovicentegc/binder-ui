import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "../../utils/render";
import {
  Title,
  Title2,
  Subtitle,
  H1,
  H2,
  H3,
  Label1,
  Label2,
  Spotlight,
  Legend,
  Legend2
} from "..";
import { theme } from "../../utils/Theme";

describe("<Title /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Title>Hi, I'm Title</Title>);
    expect(getByText("Hi, I'm Title")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Title>Hi, I'm Title</Title>);
    expect(getByText("Hi, I'm Title")).toMatchSnapshot();
  });
});

describe("<Title2 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Title2>Hi, I'm Title2</Title2>);
    expect(getByText("Hi, I'm Title2")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Title2>Hi, I'm Title2</Title2>);
    expect(getByText("Hi, I'm Title2")).toMatchSnapshot();
  });

  test("matches snapshot when color is passed via props", () => {
    const { getByText } = render(
      <Title2 color={theme.color.red4}>Hi, I'm Title2</Title2>
    );
    expect(getByText("Hi, I'm Title2")).toMatchSnapshot();
  });
});

describe("<Subtitle /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Subtitle>Hi, I'm Subtitle</Subtitle>);
    expect(getByText("Hi, I'm Subtitle")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Subtitle>Hi, I'm Subtitle</Subtitle>);
    expect(getByText("Hi, I'm Subtitle")).toMatchSnapshot();
  });

  test("matches snapshot when color is passed via props", () => {
    const { getByText } = render(
      <Subtitle color={theme.color.red2}>Hi, I'm Subtitle</Subtitle>
    );
    expect(getByText("Hi, I'm Subtitle")).toMatchSnapshot();
  });
});

describe("<H1 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<H1>Hi, I'm H1</H1>);
    expect(getByText("Hi, I'm H1")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<H1>Hi, I'm H1</H1>);
    expect(getByText("Hi, I'm H1")).toMatchSnapshot();
  });
});

describe("<H2 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<H2>Hi, I'm H2</H2>);
    expect(getByText("Hi, I'm H2")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<H2>Hi, I'm H2</H2>);
    expect(getByText("Hi, I'm H2")).toMatchSnapshot();
  });
});

describe("<H3 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<H3>Hi, I'm H3</H3>);
    expect(getByText("Hi, I'm H3")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<H3>Hi, I'm H3</H3>);
    expect(getByText("Hi, I'm H3")).toMatchSnapshot();
  });
});

describe("<Label1 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Label1>Hi, I'm Label1</Label1>);
    expect(getByText("Hi, I'm Label1")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Label1>Hi, I'm Label1</Label1>);
    expect(getByText("Hi, I'm Label1")).toMatchSnapshot();
  });
});

describe("<Label2 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Label2>Hi, I'm Label2</Label2>);
    expect(getByText("Hi, I'm Label2")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Label2>Hi, I'm Label2</Label2>);
    expect(getByText("Hi, I'm Label2")).toMatchSnapshot();
  });
});

describe("<Spotlight /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Spotlight>Hi, I'm Spotlight</Spotlight>);
    expect(getByText("Hi, I'm Spotlight")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Spotlight>Hi, I'm Spotlight</Spotlight>);
    expect(getByText("Hi, I'm Spotlight")).toMatchSnapshot();
  });
});

describe("<Legend /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Legend>Hi, I'm Legend</Legend>);
    expect(getByText("Hi, I'm Legend")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Legend>Hi, I'm Legend</Legend>);
    expect(getByText("Hi, I'm Legend")).toMatchSnapshot();
  });
});

describe("<Legend2 /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Legend2>Hi, I'm Legend2</Legend2>);
    expect(getByText("Hi, I'm Legend2")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Legend2>Hi, I'm Legend2</Legend2>);
    expect(getByText("Hi, I'm Legend2")).toMatchSnapshot();
  });
});
