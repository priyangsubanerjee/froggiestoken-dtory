import PdfViewer from "@/components/PdfViewer";

const Page = () => {

  return (
    <>
      <PdfViewer  url={"/assets/FroggiesInvestorDeck.pdf"} />
    </>
  );
};
export default Page;