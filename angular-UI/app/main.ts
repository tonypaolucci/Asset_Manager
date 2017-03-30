import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

export function main(baseUrl:string){
platformBrowserDynamic()
.bootstrapModule(AppModule(baseUrl))
.catch(err => console.error(err));

    
} 