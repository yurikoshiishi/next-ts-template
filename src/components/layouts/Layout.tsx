import Head, { HeadProps } from "@/components/layouts/Head";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import Sidebar from "@/components/layouts/Sidebar";
import { HEADER_HEIGHT, SITE_NAME } from "@/constants";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";

interface DashboardLayoutProps {
  headerTitle?: string;
  headProps?: HeadProps;
  isLoading?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  headerTitle = SITE_NAME,
  children,
  isLoading,
  headProps,
}) => {
  const { pathname } = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Head {...headProps} />
      <Header title={headerTitle} onClickOpenSidebar={onOpen} />
      <Flex height={`calc(100% - ${HEADER_HEIGHT}px)`}>
        <Sidebar
          links={[]}
          currentPathname={pathname}
          onClickCloseSidebar={onClose}
          isSidebarOpen={isOpen}
        />
        <Main isLoading={isLoading} title={headProps?.title}>
          {children}
        </Main>
      </Flex>
    </>
  );
};

export default DashboardLayout;
