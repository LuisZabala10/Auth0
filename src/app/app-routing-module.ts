import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PreciosComponent } from "./components/precios/precios.component";
import { ProtegidaComponent } from "./components/protegida/protegida.component";
import { AuthGuard } from "./services/auth.guard";

const ROUTES:Routes = [
    {
        path: 'home', component : HomeComponent
    },
    {
        path: 'precios', component : PreciosComponent
    },
    {
        path: 'protegida', component : ProtegidaComponent, canActivate: [AuthGuard]
    },
    {
        path: 'login',
        resolve:{
            URL: "https://dev-k3br-6lg.us.auth0.com/login?state=hKFo2SBxM3Bkdk5IYmtmODB6bVR3T3U2VzViQk90eC1PODA5MKFupWxvZ2luo3RpZNkgaURCYnB1OVdzWWliczVEbHZTOE9mcjVzenhYTU5yWm6jY2lk2SBldVRibEk1ZHZVcE44bkRDbWRQaHFiQ1h4azl5cGxnQg&client=euTblI5dvUpN8nDCmdPhqbCXxk9yplgB&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=ellSNHF1bDhvQnVnOEdkclY3WXBHZ1lhSDRPNkFhTGpWVVJoelYxbllsVg%3D%3D&code_challenge=iLXC4c6yM-6_P5C1RAamjgqR5kSApdMvOR5EGWCIE4U&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMTYuMCJ9"
        },
        component: HomeComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'Home'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{}