import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

  async create(dto: {title: string}) {
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }

  async findAll()  {
    return await this.todoRepository.find();

  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne({where: {id}});
    if(!todo){
      return {
        found:false
      }
    }
    return {
      ...todo,
      found: true
    };
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({where: {id}});
    // check todo exists

    Object.assign(todo, updateTodoDto);
    return await this.todoRepository.save(todo);
  }

  async remove(id: number) {
    const todo = await this.todoRepository.findOne({where: {id}});
    return await this.todoRepository.remove(todo);
  }
}
