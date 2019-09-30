import template from "./template.marko";

export default () => ({
  async handler(req, rep) {
    try {
      const render = await template.render({});
      return rep.code(200).type('text/html').send(render.out.stream.str);
    } catch (e) {
      return rep.code(500).send(JSON.stringify({
        statusCode: 500,
        error: 'Internal server error',
        message: e.message
      }));
    }
  }
});