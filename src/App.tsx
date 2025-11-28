import { Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}
