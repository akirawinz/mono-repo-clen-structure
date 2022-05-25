import { Injectable } from '@nestjs/common';

import { User } from './users.entity';

@Injectable()
export class UsersService {
  private posts: User[] = [{ id: '1', firstName: 'melkir' }];

  findOneById(postId: string): User {
    return this.posts.find(({ id }) => id === postId);
  }
}
