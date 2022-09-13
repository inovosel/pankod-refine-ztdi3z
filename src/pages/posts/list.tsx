import { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    List,
    Table,
    useTable,
    getDefaultSortOrder,
    DateField,
    Space,
    EditButton,
    DeleteButton,
} from "@pankod/refine-antd";

import { IPost } from "interfaces";

import { API_URL } from "../../constants";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const [locale, setLocale] = useState("en");
    const [publicationState, setPublicationState] = useState("live");

    const { tableProps, sorter } = useTable<IPost>({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
        metaData: {
            locale,
            publicationState,
        },
    });

    return (
        <List>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    showSizeChanger: true,
                }}
            >
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter={{ multiple: 3 }}
                />
                <Table.Column
                    dataIndex="name"
                    key="name"
                    title="Name"
                    defaultSortOrder={getDefaultSortOrder("name", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    dataIndex="floor"
                    key="floor"
                    title="Floor"
                    defaultSortOrder={getDefaultSortOrder("floor", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    dataIndex="office"
                    key="office"
                    title="Office"
                    defaultSortOrder={getDefaultSortOrder("office", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    dataIndex="doorbell"
                    key="doorbell"
                    title="Doorbell"
                    defaultSortOrder={getDefaultSortOrder("doorbell", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    sorter={{ multiple: 1 }}
                />
                <Table.Column<{ id: string }>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
