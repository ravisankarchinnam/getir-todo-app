import React, {ReactNode} from "react";
import {Col, ColProps, Row, RowProps} from "antd";

export interface IFormElementProps {
  colProps?: ColProps;
  rowProps?: RowProps;
  children: ReactNode;
}

const FormElement = ({children, rowProps, colProps}: IFormElementProps) => {
  return (
    <Row justify="center" {...rowProps}>
      <Col xs={24} sm={16} {...colProps}>
        {children}
      </Col>
    </Row>
  );
};

export default FormElement;
