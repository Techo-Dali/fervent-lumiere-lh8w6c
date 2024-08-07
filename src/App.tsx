import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bulbOutline, callOutline, homeOutline } from "ionicons/icons";
import Tab1 from "./pages/HomeTab";
import Tab2 from "./pages/AboutTab";
import Tab3 from "./pages/ContactTab";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
/* import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css"; */

/* Theme variables */
import "./theme/variables.css";
import "./index.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/HomeTab">
            <Tab1 />
          </Route>
          <Route exact path="/AboutTab">
            <Tab2 />
          </Route>
          <Route path="/ContactTab">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/HomeTab" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="HomeTab" href="/HomeTab">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="AboutTab" href="/AboutTab">
            <IonIcon icon={bulbOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ContactTab" href="/ContactTab">
            <IonIcon icon={callOutline} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
