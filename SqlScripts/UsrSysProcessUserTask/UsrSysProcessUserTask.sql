insert into SysProcessUserTask(Id, SysUserTaskSchemaUId, Caption)
select '93960D1A-2904-42BE-9108-50F35C33551C',
	s.UId, s.Caption from SysSchema s
where s.Name = 'UsrMyDemoUserTask'
  and not exists (select 1 from SysProcessUserTask where 
	Id = '93960D1A-2904-42BE-9108-50F35C33551C')
