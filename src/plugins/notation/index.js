import { annotate, annotationGroup } from 'rough-notation'
import { pageName } from '@tools'
import './index.scss'
const notation = () => {
    const group = []

    // header 用户昵称
    const headeerNickname = annotate(
        document.querySelector('#Header1_HeaderTitle'),
        {
            type: 'underline',
            color: '#2196F3',
        },
    )

    group.push(headeerNickname)

    if (pageName() === 'post') {
        // post title
        const title = annotate(document.querySelector('#cb_post_title_url'), {
            type: 'highlight',
            color: '#FFF176',
        })

        // <mark>
        const mark = annotate(document.querySelector('mark'), {
            type: 'highlight',
            color: '#FFD54F',
        })

        // <s>
        const s = annotate(document.querySelector('s'), {
            type: 'strike-through',
            color: '#FF0000',
        })

        // <u>
        const u = annotate(document.querySelector('u'), {
            type: 'underline',
            color: '#2196F3',
        })

        // <strong>
        const strong = annotate(document.querySelector('strong'), {
            type: 'circle',
            color: '#F44336',
        })

        // 文章段落
        const paragraph = annotate(
            document.querySelector('#cnblogs_post_body>p'),
            {
                type: 'box',
                color: '#2196F3',
            },
        )

        // h2
        const h2 = annotate(document.querySelector('#cnblogs_post_body>h2'), {
            type: 'highlight',
            color: '#eee',
        })

        group.push(title, mark, s, u, strong, paragraph, h2)
    }

    const ag = annotationGroup(group)
    setTimeout(() => {
        ag.show()
    }, 1000)
}

export default notation