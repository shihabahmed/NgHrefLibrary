
# NgHref
  
### Installation
```
npm install ng-href --save
```

### Usage

In the module file (the one that declares the component inside which you'll be using `ng-href`) add the following code
```
import { NgHrefModule } from 'ng-href';

@NgModule({
    imports: [
        NgHrefModule
    ],
    ... //other stuff
})
```


Then in the component template file, add class `ng-href` to the `<a>` tag as below.
```
<a href="YOUR_LINK" class="ng-href">Link Text</a>
```

