// ** MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from "src/@core/layouts/VerticalLayout";

// ** Navigation Imports
import VerticalNavItems from "src/navigation/vertical";

// ** Component Import
import UpgradeToProButton from "./components/UpgradeToProButton";
import VerticalAppBarContent from "./components/vertical/AppBarContent";

// ** Hook Import
import { useSettings } from "src/@core/hooks/useSettings";

const UserLayout = ({ children }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery(theme => theme.breakpoints.down("lg"));


  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()} // Navigation Items

      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
      <UpgradeToProButton />
    </VerticalLayout>
  );
};

export default UserLayout;
