import os

commands = []
commands.append('pwd')
commands.append('npx cypress open')



for cmd in commands:
    res = os.system(cmd)
    print("`%s` ran with exit code %d" %(cmd, res))
