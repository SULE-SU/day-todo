import {Typography, Divider, List} from "antd";

const {Title, Paragraph} = Typography;

export function AboutUs() {
    const features = [
        '添加新的待办事项',
        '标记事项为已完成',
        '删除不需要的事项',
        '查看已完成的事项列表'
    ];

    return (
        <div className="about-us">
            <Title level={2}>关于我们</Title>
            <div className="about-content">
                <Title level={3}>hi I am Leo</Title>
                <Paragraph>欢迎使用我们的待办事项应用！</Paragraph>

                <Divider/>

                <Title level={4}>应用功能</Title>
                <List
                    size="small"
                    dataSource={features}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Divider/>

                <Title level={4}>使用说明</Title>
                <Paragraph>
                    在主页中，您可以通过输入框添加新的待办事项，点击事项可以标记为完成状态，点击删除按钮可以删除事项。
                </Paragraph>

                <Divider/>

                <Title level={4}>联系我们</Title>
                <Paragraph>
                    如有任何问题或建议，请联系：
                    <a href="mailto:sule@oocl.com">sule@oocl.com</a>
                </Paragraph>
            </div>
        </div>
    );
}