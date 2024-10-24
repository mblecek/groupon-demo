# Get started

## Run angular app

```shell
    cd angular
    npm i
    npm start
```

## Run nodejs-app

```shell
    cd nodejs-pp
    npm i
    npm run dev
```

# Documentation of reused copmponent

In `nextjs-app/src/app/ui-components/deal-item.jsx` there is react component for rendering deal list item. 

**Usage in NextJS**

In `nextjs-app/src/app/page.js` is used component

```javascript
import styles from "./page.module.css";
import { DealItem } from "./ui-components/deal-item";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <DealItem name="Apple" price={1.99} />
          <DealItem name="Apple" price={1.99} />
          <DealItem name="Apple" price={1.99} />
      </main>
    </div>
  );
}
```


**Usage in angular**

In `angular/src/app/deal-item.component.js` we transform React compoent via react2angular to angular component. Which is registered in `app.module.j`s` and then used in `app.component.js`



