

# 运维

## github

https://zhuanlan.zhihu.com/p/484734960


ssh 另外保存地址
ssh-keygen -t rsa -f D:/BaiduNetdiskDownload/project/ao -C "aocunxin@outlook.com"

每次推送时指定秘钥
ssh-agent bash
ssh-add D:/BaiduNetdiskDownload/project/ao

git push

git remote set-url origin git@github.com:123Reyna/aoao_blog.git

推送远程也新建
git push --set-upstream origin pages

查看本地用户名
git config --local user.name


删除当前仓库
git push origin --delete pages

查看某次提交
git show <commit_id> --raw

展示
git status

git ls-files：该命令会列出Git仓库中的所有文件

git ls-tree -r HEAD：该命令会显示当前分支最新提交的所有文件

idea格式化快捷键
Ctrl+Alt+L