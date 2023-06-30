mkdir .secrets
rm .secrets/private.key .secrets/public.key
ssh-keygen -q -t rsa -b 4096 -m PEM -f .secrets/private.key -q -N ""
openssl rsa -in .secrets/private.key -pubout -out .secrets/public.key
