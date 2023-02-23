import Link from "next/link";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.header}>
      <div className={classes.container}>
          <input type="checkbox" name="" id=""/>
          <div className={classes.hamburger_lines}>
              <span className={classes.line1}></span>
              <span className={classes.line2}></span>
              <span className={classes.line3}></span>
          </div>
          <ul className={classes.menu_items}>
              <li><Link className={classes.link} href="/history">History</Link></li>
              <li><Link className={classes.link} href="/deletedhistory">Deleted History</Link></li>
          </ul>
          <Link href="/">
            <h1 className={classes.logo}>Calculator</h1>
          </Link>
      </div>
    </nav>
  );
}

export default MainNavigation;
