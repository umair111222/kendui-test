import React from 'react';
import './App.css';

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
} from "@progress/kendo-react-layout";
import { Icon } from "@progress/kendo-react-common";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { TextBox } from "@progress/kendo-react-inputs";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          width: 900,
          height: 670,
          boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
          marginTop: "15px",
        }}
      >
        <CardHeader
          className="k-hbox"
          style={{
            background: "primary",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardTitle
            style={{
              marginBottom: "4px",
            }}
          >
            DEPOSIT TO CASH/CREDIT ACCOUNT
          </CardTitle>
          <div>
            <Icon name="delete" style={{
              marginLeft: 10
            }} />
            <Icon name="search" style={{
              marginLeft: 10
            }} />
            <Icon name="minus" style={{
              marginLeft: 10
            }} />
            <Icon name="x" style={{
              marginLeft: 10
            }} />
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid-layout-container">
            <GridLayout
              gap={{
                rows: 6,
                cols: 10,
              }}
              rows={[
                {
                  height: 40,
                },
                {
                  height: 40,
                },
                {
                  height: 450,
                },
              ]}
              cols={[
                {
                  width: 230,
                },
                {
                  width: 620,
                },
              ]}
            >
              <GridLayoutItem row={1} col={1}>
                <DropDownList
                  style={{
                    width: "230px",
                    height: "30px"
                  }}
                  data={["Received From"]}
                  defaultValue="Received From"
                />
              </GridLayoutItem>
              <GridLayoutItem row={1} col={2} style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div>
                  <DropDownList
                    style={{
                      width: "145px",
                      height: "30px",
                      marginRight: 10
                    }}
                    data={["Bank Acct"]}
                    defaultValue="Bank Acct"
                  />
                  <DropDownList
                    style={{
                      width: "145px",
                      height: "30px",
                      marginLeft: 3,
                      marginRight: 10
                    }}
                    data={["Prnt Method"]}
                    defaultValue="Prnt Method"
                  />
                  <DropDownList
                    style={{
                      width: "145px",
                      height: "30px",
                      marginLeft: 3,
                      marginRight: 10
                    }}
                    data={["Payment No"]}
                    defaultValue="Payment No"
                  />
                  <DropDownList
                    style={{
                      width: "145px",
                      height: "30px",
                      marginLeft: 3
                    }}
                    data={["Payment Data"]}
                    defaultValue="Payment Data"
                  />
                </div>
              </GridLayoutItem>
              <GridLayoutItem row={2} col={2}>
                <TextBox placeholder="Memo" />
              </GridLayoutItem>
              <GridLayoutItem row={3} col={1} colSpan={2}>
                <Grid
                  style={{
                    height: "400px",
                  }}
                  data={new Array(25).fill({
                    "Account": "",
                    "ReceivedFrom": "",
                    "Amount": "",
                    "Reference": "",
                    "Memo": ""
                  })}
                >
                  <GridColumn field="Account" title="Account" width="110px" className="grid-column" cell={(props) => (
                    <DropDownList data={[]} fillMode="flat" />
                  )} />
                  <GridColumn field="ReceivedFrom" title="Received From" width="220px" className="grid-column" />
                  <GridColumn field="Amount" title="Amount" width="90px" className="grid-column" />
                  <GridColumn field="Reference" title="Reference" width="110px" className="grid-column" />
                  <GridColumn field="Memo" title="Memo" className="grid-column" />
                </Grid>
              </GridLayoutItem>
            </GridLayout>
          </div>
        </CardBody>
        <CardActions layout="end">
          <Button themeColor={"primary"}>Save</Button>
          <Button themeColor={"primary"}>Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
