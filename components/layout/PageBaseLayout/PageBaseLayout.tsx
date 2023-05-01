import styles from './PageBaseLayout.module.scss';

type TProps = {
  header?: boolean;
  aside?: boolean;
  footer?: boolean;
  children: React.ReactNode;
}

const PageBaseLayout = ({ header = true, footer = true, aside = true, children }: TProps) => {
  return (
    <div className={styles.PageBaseLayout}>
      {/* HEADER */}
      {header && <header>Header</header>}


      <div className={styles.PageBaseLayout__content}>
        {/* ASIDE */}
        {aside && <aside>Aside</aside>}

        {/* MAIN */}
        <main>{children}</main>
      </div>

      {/* FOOTER */}
      {footer && <footer>Footer</footer>}
    </div>
  )
}

export default PageBaseLayout;
