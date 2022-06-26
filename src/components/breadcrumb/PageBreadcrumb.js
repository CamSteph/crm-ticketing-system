import React from 'react';

// Import bootstrap
import {Breadcrumb} from 'react-bootstrap';
// End import bootstrap

const PageBreadcrumb = ({page}) => {
  return (
    <Breadcrumb class="mt-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active href={page}>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default PageBreadcrumb;