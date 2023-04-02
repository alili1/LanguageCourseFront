import { rest } from 'msw'

export default [
  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.json({
        jsMessage: 'alert(123)',
        htmlMessage: '<html><div>hehehe</div></html>'
      })
    )
  })
]