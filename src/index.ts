import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Export the DNS name of the bucket
export const bucketName = bucket.bucketDomainName;
