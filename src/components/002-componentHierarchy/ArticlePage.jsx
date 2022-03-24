import ArticleBody from "./ArticleBody";
import Footer from "./Footer";
import FormBody from "./FormBody";
import NavBar from "./NavBar";

// sfc to shortcut the process
const ArticlePage = () => {
  return (
    <>
      <NavBar />
      {/* <ArticleBody /> */}
      <FormBody/>
      <Footer/>
    </>
  );
};

export default ArticlePage;