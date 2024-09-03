import { Loader } from "@/components/loader";
import dynamic from "next/dynamic";

export const AppMainPage = dynamic(() => import("../components/main_page_dynamic"), {
    ssr: false,
    loading: function LoadingComponent() {
      return <Loader />
    },
  });