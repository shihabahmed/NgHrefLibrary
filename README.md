
# NgHref
  
### Installation
```
npm install ng-href --save
```

### Usage

In `app.module.ts` add the following code
```
import { NgHrefModule } from 'ng-href';

@NgModule({
    imports: [
        NgHrefModule
    ],
    ... //other stuff
})
```


Then in the component template file, add class `ng-href` as below.
```
<a href="YOUR_LINK" class="ng-href">Link Text</a>
```

