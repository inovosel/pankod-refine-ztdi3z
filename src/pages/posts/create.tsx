import React, { useState } from "react";
import { IResourceComponentsProps, useApiUrl } from "@pankod/refine-core";

import {
    Create,
    Form,
    Input,
    useForm,
    useSelect,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import {
    useStrapiUpload,
    mediaUploadMapper,
} from "@pankod/refine-strapi-v4";

import { TOKEN_KEY } from "../../constants";
import { IPost } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const API_URL = useApiUrl();
    const [locale, setLocale] = useState("en");

    const [selectedTab, setSelectedTab] =
        useState<"write" | "preview">("write");

    const { formProps, saveButtonProps } = useForm<IPost>();

    const { ...uploadProps } = useStrapiUpload({
        maxCount: 1,
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) => {
                    return (
                        formProps.onFinish &&
                        formProps.onFinish(mediaUploadMapper(values))
                    );
                }}
            >
                <Form.Item
                    wrapperCol={{ span: 14 }}
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 6 }}
                    label="Floor"
                    name="floor"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 6 }}
                    label="Office"
                    name="office"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 6 }}
                    label="Doorbell"
                    name="doorbell"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
