export default {
    sendSuccessHTML: (rep, data) => rep.code(200).type('text/html').send(data),
    sendSuccessJSON: (rep, data) => rep.code(200).type('application/json').send(JSON.stringify(data)),
    sendRedirect: (rep, url) => rep.code(302).redirect(url),
    sendClearCookieRedirect: (rep, cookie, cookieOptions, url) => rep.clearCookie(cookie, cookieOptions).code(302).redirect(url)
};
