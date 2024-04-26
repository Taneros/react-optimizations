import { Layout } from "./components/Layout/Layout";
import { Alpha } from "./components/Alpha/Alpha";
import { PropsCauseRender } from "./components/PropsCauseRender/PropsCauseRender";

export default function App() {
  return (
    <Layout>
      {/* <Alpha /> */}
      <PropsCauseRender />
    </Layout>
  );
}
