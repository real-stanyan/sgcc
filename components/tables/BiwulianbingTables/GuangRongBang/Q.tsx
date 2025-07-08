import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../src/components/ui/breadcrumb";

const Q = () => (
  <>
    <Breadcrumb className="p-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold tracking-wider text-lg">
            主管部门
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-lg tracking-normal">
            配网管理部
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <h1 className="text-center font-semibold text-xl mt-[100px]">未获得名次</h1>
  </>
);

export default Q;
