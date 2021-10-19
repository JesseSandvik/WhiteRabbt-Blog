import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="White Rabbit tech blog website"
                />
            </Head>
            <article>
                <header>
                    <div className={styles.siteTitle}>
                        <Link href="/"><a><h1>WhiteRabbt</h1></a></Link>
                        <small>“Why, the best way to explain it is to do it.” – The Dodo, Alice’s Adventures in Wonderland by Lewis Carroll</small>
                    </div>
                    <nav>
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/posts"><a>Posts</a></Link></li>
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
                <footer><h5>jessesandvik &copy; 2021</h5></footer>
            </article>
        </div>
    );
}