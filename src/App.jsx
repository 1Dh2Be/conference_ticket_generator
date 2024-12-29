import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import TicketForm from "./components/ticket_form/TicketForm";
import TicketConfirmation from "./components/ticket_confirmation/TicketConfirmation";
import { TicketProvider } from "./components/ticket_form/ticketContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <TicketForm /> },
        { path: "ticketform", element: <TicketForm /> },
        {
          path: "confirmation",
          element: (
            <ProtectedRoutes>
              <TicketConfirmation />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return (
    <TicketProvider>
      <RouterProvider router={router}>
        <TicketForm />
        <TicketConfirmation />
      </RouterProvider>
    </TicketProvider>
  );
}

export default App;
