import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        // Returns an object like: { html, head, errorHtml, chunks, styles }
        return renderPage();
    }

    render() {
        return (
            <html>
                <Head>
                    <title>CINQUE'S BLOG</title>
                    <link href="/static/css/normalize.css" rel="stylesheet" />
                    <link href="/static/css/common.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}