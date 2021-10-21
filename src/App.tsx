import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";

export const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}
