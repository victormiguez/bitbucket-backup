for word in $(cat repositories | sed -n 1'p' | tr ',' '\n')
do git clone https://${1}@bitbucket.org/${2}/$word
done