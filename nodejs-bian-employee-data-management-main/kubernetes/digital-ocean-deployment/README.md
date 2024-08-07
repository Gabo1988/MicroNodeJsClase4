# digital-ocean

## 0. Descargar kubeconfig y ubicar en "C:\Users\USER\.kube" con nombre "config" sin extensión
```
C:\Users\USER\.kube\config
```

## 1. Listar namespace
```
kubectl get ns
```

## 2. Eliminar un namespace
```
kubectl delete ns <namespace>
```

## 3. Crear namespace node (ubicar en la carpeta /kubernetes/digital-ocean-deployment/)
```
kubectl apply -f 00-namespace.yaml
```

## 4. Ejecutar deployment
```
kubectl -n nodejs-examples apply -f 01-nodejs-deployment-loadbalancer.yaml
```

## 4.0 Listar all objects
```
kubectl -n nodejs-examples get all
```

## 4.1 Listar deployments
```
kubectl -n nodejs-examples get deployments
```

## 4.2 Listar services
```
kubectl -n nodejs-examples get services
```

## 5. Conocer la IP Pública: EXTERNAL-IP
```
kubectl -n nodejs-examples get services
```

```
NAME                                   TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE
nodejs-bian-employee-data-management   LoadBalancer   10.245.10.183   138.197.63.245   80:30257/TCP   6m22s
```

## 7. Invocar a la API
```
POST
http://138.197.63.245/employee-data-management/v1.0/personal-information/retrieve

Request
{
    "RetrievePersonalInformation": {
        "Person": {
            "PersonIdentification": {
                "TypeOfIdentification": "cedula",
                "IdentityCardNumber": "456745674567"
            }
        }
    }
}

Response
{
    "RetrievePersonalInformationResponse": {
        "Person": {
            "PersonIdentification": {
                "TypeOfIdentification": "cedula",
                "IdentityCardNumber": "456745674567",
                "PersonName": {
                    "GivenName": "Juan",
                    "MiddleName": "Perez"
                },
                "Contact": {
                    "MobilePhoneNumber": "+55987654321",
                    "PersonalEmailAddress": "juanperez@work.com"
                }
            }
        }
    }
}
```
