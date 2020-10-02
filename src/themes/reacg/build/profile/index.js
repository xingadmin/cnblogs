import './index.scss'
import { getThemeOptions } from '@config/extra'

import {
    followersDetailsUrl,
    followingDetailsUrl,
    index,
    userDetails,
} from '@links'
import {
    getBlogname,
    getBlogAge,
    getFollowers,
    getFollowing,
} from '@cnblog'

function buildAvatar() {
    const { avatar } = getThemeOptions()
    if (avatar === '' || $('#blog-news').length === 0)
        return
    $('#blog-news').prepend(
        `<img class='custom-avatar' src='${avatar}' />`,
    )
}

function buildInfo() {
    const name = getBlogname()
    const date = getBlogAge()
    const followers = getFollowers()
    const following = getFollowing()
    const el = `<div class="custom-info">
        <a class='custom-name' href="${index}">${name}</a>
        <a href="${userDetails}">园龄：${date}</a>
        <a href="${followersDetailsUrl}">粉丝：${followers}</a>
        <a href="${followingDetailsUrl}">关注：${following}</a>
    </div>`
    $('#profile_block').before(el)
}

export default () => {
    buildAvatar()
    buildInfo()
}