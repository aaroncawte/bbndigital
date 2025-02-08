const GradientA = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    style={{
      // Panda doesn't seem to like -webkit-background-clip, so we'll use inline styles for the meantime
      color: "#a900ff",
      background: `linear-gradient(-45deg, #e8185f, #a900ff)`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
    {...props}
  >
    {props.children}
  </a>
);

export default GradientA;
