import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Amplify, Analytics } from 'aws-amplify';
import awsconfig  from './aws-exports';
import aws_exports from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));