import { Controller, Context } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Article from '../model/article';
import Condition from '../lib/condition';

export default class AdminController extends Controller {

  public async home(ctx: Context) {
    await ctx.render('home.js', { url: ctx.url.replace(/\/dust/, '') });
  }

  public async list(ctx: Context) {
    const condition = deserialize(Condition, ctx.request.body);
    ctx.body = await ctx.service.article.getArtilceList(condition);
  }

  public async add(ctx: Context) {
    const article = deserialize(Article, ctx.request.body);
    ctx.body = await ctx.service.article.saveArticle(article);
  }

  public async del(ctx: Context) {
    const { id  } = ctx.request.body;
    ctx.body = await ctx.service.article.deleteArticle(id);
  }

  public async detail(ctx: Context) {
    const { id } = ctx.params;
    ctx.body = await ctx.service.article.query({ id });
  }
}